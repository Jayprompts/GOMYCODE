/**
 * TaskFlow Studio - Main Application Logic
 * Architecture: Event-driven Vanilla JS with LocalStorage State Synchronization
 */

(function () {
  'use strict';

  // --- Constants & Storage Keys ---
  const STORAGE_KEY = 'taskflow_studio_tasks_v1';
  const THEME_STORAGE_KEY = 'taskflow_theme_v1';

  // Default sample tasks for new users
  const DEFAULT_TASKS = [
    {
      id: 'task-demo-1',
      title: 'Complete GoMyCode Final Project & documentation',
      category: 'Code',
      priority: 'high',
      dueDate: getRelativeDate(0), // Today
      completed: false,
      createdAt: Date.now() - 3600000 * 2,
    },
    {
      id: 'task-demo-2',
      title: 'Review React JS Checkpoint components & bootstrap grid',
      category: 'Study',
      priority: 'medium',
      dueDate: getRelativeDate(1), // Tomorrow
      completed: true,
      createdAt: Date.now() - 3600000 * 12,
    },
    {
      id: 'task-demo-3',
      title: 'Deploy TaskFlow Studio live to GitHub Pages / Vercel',
      category: 'Work',
      priority: 'high',
      dueDate: getRelativeDate(2),
      completed: false,
      createdAt: Date.now() - 3600000 * 24,
    },
    {
      id: 'task-demo-4',
      title: 'Morning 5K run and cardio session',
      category: 'Fitness',
      priority: 'low',
      dueDate: getRelativeDate(-1),
      completed: true,
      createdAt: Date.now() - 3600000 * 48,
    },
  ];

  // Helper: Return YYYY-MM-DD offset by days
  function getRelativeDate(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  }

  // --- Application State ---
  let tasks = [];
  let currentFilter = 'all';
  let currentCategory = 'all';
  let currentSearch = '';
  let currentSort = 'created-desc';
  let lastDeletedTask = null;
  let undoTimeout = null;

  // --- DOM Elements ---
  const taskForm = document.getElementById('taskForm');
  const taskTitleInput = document.getElementById('taskTitleInput');
  const taskCategorySelect = document.getElementById('taskCategorySelect');
  const taskPrioritySelect = document.getElementById('taskPrioritySelect');
  const taskDueDateInput = document.getElementById('taskDueDateInput');

  const taskList = document.getElementById('taskList');
  const emptyState = document.getElementById('emptyState');
  const tasksListTitle = document.getElementById('tasksListTitle');

  // Stats
  const statTotal = document.getElementById('statTotal');
  const statActive = document.getElementById('statActive');
  const statCompleted = document.getElementById('statCompleted');
  const statHighPriority = document.getElementById('statHighPriority');
  const progressBar = document.getElementById('progressBar');
  const progressPercentage = document.getElementById('progressPercentage');
  const progressHint = document.getElementById('progressHint');

  // Controls
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortBySelect = document.getElementById('sortBySelect');
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  const clearCompletedBtn = document.getElementById('clearCompletedBtn');

  // Header & Modals
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const shortcutsBtn = document.getElementById('shortcutsBtn');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const closeShortcutsModalBtn = document.getElementById('closeShortcutsModalBtn');

  const editModal = document.getElementById('editModal');
  const editTaskForm = document.getElementById('editTaskForm');
  const editTaskId = document.getElementById('editTaskId');
  const editTaskTitle = document.getElementById('editTaskTitle');
  const editTaskCategory = document.getElementById('editTaskCategory');
  const editTaskPriority = document.getElementById('editTaskPriority');
  const editTaskDueDate = document.getElementById('editTaskDueDate');
  const closeEditModalBtn = document.getElementById('closeEditModalBtn');
  const cancelEditBtn = document.getElementById('cancelEditBtn');

  const toastContainer = document.getElementById('toastContainer');
  const dateText = document.getElementById('dateText');

  // --- Initialization ---
  function init() {
    loadTheme();
    loadTasks();
    setupCurrentDate();
    setupDefaultDueDate();
    setupEventListeners();
    render();
  }

  // --- Theme Management ---
  function loadTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    showToast(`Switched to ${next} theme`);
  }

  // --- Current Date Display ---
  function setupCurrentDate() {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const todayStr = new Date().toLocaleDateString('en-US', options);
    if (dateText) dateText.textContent = todayStr;
  }

  function setupDefaultDueDate() {
    if (taskDueDateInput) {
      taskDueDateInput.value = getRelativeDate(0);
    }
  }

  // --- Task Storage ---
  function loadTasks() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        tasks = JSON.parse(stored);
      } else {
        tasks = [...DEFAULT_TASKS];
        saveTasks();
      }
    } catch (e) {
      console.error('Error loading tasks from localStorage:', e);
      tasks = [...DEFAULT_TASKS];
    }
  }

  function saveTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Error saving tasks to localStorage:', e);
    }
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // New Task Form
    taskForm.addEventListener('submit', handleAddTask);

    // Filters & Search
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.status;
        render();
      });
    });

    categoryFilter.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      render();
    });

    sortBySelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      render();
    });

    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      clearSearchBtn.hidden = !currentSearch;
      render();
    });

    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearSearchBtn.hidden = true;
      searchInput.focus();
      render();
    });

    // Bulk Actions
    exportJsonBtn.addEventListener('click', exportTasksAsJson);
    clearCompletedBtn.addEventListener('click', handleClearCompleted);

    // Theme & Shortcuts
    themeToggleBtn.addEventListener('click', toggleTheme);
    shortcutsBtn.addEventListener('click', () => shortcutsModal.showModal());
    closeShortcutsModalBtn.addEventListener('click', () => shortcutsModal.close());

    // Edit Modal
    closeEditModalBtn.addEventListener('click', () => editModal.close());
    cancelEditBtn.addEventListener('click', () => editModal.close());
    editTaskForm.addEventListener('submit', handleSaveEdit);

    // Close modals on backdrop click
    [editModal, shortcutsModal].forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          dialog.close();
        }
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Ignore when inside an input or textarea (unless Escape)
      const isInput = ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName);

      if (e.key === 'Escape') {
        if (editModal.open) editModal.close();
        if (shortcutsModal.open) shortcutsModal.close();
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        toggleTheme();
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        searchInput.focus();
        return;
      }

      if (e.key === '/' && !isInput) {
        e.preventDefault();
        taskTitleInput.focus();
        return;
      }

      if (e.key === '?' && !isInput) {
        e.preventDefault();
        shortcutsModal.showModal();
      }
    });
  }

  // --- Handlers: Add, Toggle, Edit, Delete ---
  function handleAddTask(e) {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    if (!title) return;

    const newTask = {
      id: 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      title: title,
      category: taskCategorySelect.value,
      priority: taskPrioritySelect.value,
      dueDate: taskDueDateInput.value || null,
      completed: false,
      createdAt: Date.now(),
    };

    tasks.unshift(newTask);
    saveTasks();
    render();

    // Reset Form
    taskTitleInput.value = '';
    setupDefaultDueDate();
    taskTitleInput.focus();

    showToast(`Task added: "${newTask.title.slice(0, 24)}..."`);
  }

  function toggleTaskComplete(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    task.completed = !task.completed;
    saveTasks();
    render();

    if (task.completed) {
      showToast('Task marked as completed! 🎉');
      checkAllCompletedCelebration();
    }
  }

  function openEditModal(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    editTaskId.value = task.id;
    editTaskTitle.value = task.title;
    editTaskCategory.value = task.category;
    editTaskPriority.value = task.priority;
    editTaskDueDate.value = task.dueDate || '';

    editModal.showModal();
  }

  function handleSaveEdit(e) {
    e.preventDefault();
    const id = editTaskId.value;
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    task.title = editTaskTitle.value.trim();
    task.category = editTaskCategory.value;
    task.priority = editTaskPriority.value;
    task.dueDate = editTaskDueDate.value || null;

    saveTasks();
    render();
    editModal.close();
    showToast('Task updated successfully');
  }

  function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return;

    lastDeletedTask = { task: tasks[index], index };
    tasks.splice(index, 1);
    saveTasks();
    render();

    showToast('Task deleted', true);
  }

  function undoDelete() {
    if (!lastDeletedTask) return;
    tasks.splice(lastDeletedTask.index, 0, lastDeletedTask.task);
    saveTasks();
    render();
    showToast('Task restored');
    lastDeletedTask = null;
  }

  function handleClearCompleted() {
    const completedCount = tasks.filter((t) => t.completed).length;
    if (completedCount === 0) {
      showToast('No completed tasks to clear.');
      return;
    }

    if (confirm(`Delete ${completedCount} completed task(s)?`)) {
      tasks = tasks.filter((t) => !t.completed);
      saveTasks();
      render();
      showToast(`Cleared ${completedCount} completed tasks.`);
    }
  }

  function exportTasksAsJson() {
    if (tasks.length === 0) {
      showToast('No tasks to export.');
      return;
    }

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(tasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `taskflow_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Tasks exported to JSON');
  }

  // --- Filtering & Sorting ---
  function getFilteredAndSortedTasks() {
    return tasks
      .filter((task) => {
        // Status filter
        if (currentFilter === 'active' && task.completed) return false;
        if (currentFilter === 'completed' && !task.completed) return false;

        // Category filter
        if (currentCategory !== 'all' && task.category !== currentCategory) return false;

        // Search query
        if (currentSearch) {
          const matchTitle = task.title.toLowerCase().includes(currentSearch);
          const matchCat = task.category.toLowerCase().includes(currentSearch);
          if (!matchTitle && !matchCat) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (currentSort === 'created-desc') return b.createdAt - a.createdAt;
        if (currentSort === 'created-asc') return a.createdAt - b.createdAt;
        if (currentSort === 'priority-desc') {
          const weights = { high: 3, medium: 2, low: 1 };
          return weights[b.priority] - weights[a.priority];
        }
        if (currentSort === 'due-asc') {
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return 0;
      });
  }

  // --- Render Functions ---
  function render() {
    updateAnalytics();
    renderTasksList();
  }

  function updateAnalytics() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const active = total - completed;
    const highPriority = tasks.filter((t) => t.priority === 'high' && !t.completed).length;

    statTotal.textContent = total;
    statActive.textContent = active;
    statCompleted.textContent = completed;
    statHighPriority.textContent = highPriority;

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;

    if (percentage === 100 && total > 0) {
      progressHint.textContent = 'Awesome! All tasks are completed! 🏆';
    } else if (percentage >= 70) {
      progressHint.textContent = 'Nearly there! Outstanding momentum! 🚀';
    } else if (percentage >= 40) {
      progressHint.textContent = 'Solid progress! Keep pushing forward! 💪';
    } else {
      progressHint.textContent = 'Get started! One task at a time. ✨';
    }
  }

  function renderTasksList() {
    const filteredTasks = getFilteredAndSortedTasks();
    taskList.innerHTML = '';

    // Title state update
    if (currentFilter === 'active') tasksListTitle.textContent = `In Progress (${filteredTasks.length})`;
    else if (currentFilter === 'completed') tasksListTitle.textContent = `Completed (${filteredTasks.length})`;
    else tasksListTitle.textContent = `All Tasks (${filteredTasks.length})`;

    if (filteredTasks.length === 0) {
      emptyState.hidden = false;
      taskList.hidden = true;
      return;
    }

    emptyState.hidden = true;
    taskList.hidden = false;

    filteredTasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = `task-card priority-${task.priority} ${task.completed ? 'completed' : ''}`;
      li.dataset.id = task.id;

      // Format Due Date pill
      let dueHtml = '';
      if (task.dueDate) {
        const dueStatus = getDueStatus(task.dueDate);
        dueHtml = `<span class="pill due-pill ${dueStatus.class}">📅 ${dueStatus.label}</span>`;
      }

      li.innerHTML = `
        <div class="task-left">
          <button class="custom-checkbox" aria-label="Toggle completed state" title="${task.completed ? 'Mark incomplete' : 'Mark complete'}">
            <svg class="checkbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <div class="task-info">
            <span class="task-title">${escapeHtml(task.title)}</span>
            <div class="task-meta">
              <span class="pill category-pill cat-${task.category.toLowerCase()}">${getCategoryIcon(task.category)} ${task.category}</span>
              <span class="pill priority-pill ${task.priority}">${capitalize(task.priority)}</span>
              ${dueHtml}
            </div>
          </div>
        </div>
        <div class="task-actions">
          <button class="icon-btn edit-btn" aria-label="Edit task" title="Edit task">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          <button class="icon-btn delete-btn" aria-label="Delete task" title="Delete task">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;

      // Event Bindings
      li.querySelector('.custom-checkbox').addEventListener('click', () => toggleTaskComplete(task.id));
      li.querySelector('.edit-btn').addEventListener('click', () => openEditModal(task.id));
      li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));

      taskList.appendChild(li);
    });
  }

  // --- Helper Utilities ---
  function getDueStatus(dateStr) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [year, month, day] = dateStr.split('-');
    const due = new Date(year, month - 1, day);
    due.setHours(0, 0, 0, 0);

    const diffDays = Math.round((due - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { label: `Overdue (${Math.abs(diffDays)}d)`, class: 'overdue' };
    if (diffDays === 0) return { label: 'Due Today', class: 'today' };
    if (diffDays === 1) return { label: 'Tomorrow', class: '' };
    return { label: due.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), class: '' };
  }

  function getCategoryIcon(cat) {
    switch (cat) {
      case 'Work': return '💼';
      case 'Personal': return '👤';
      case 'Study': return '📚';
      case 'Fitness': return '🏃';
      case 'Code': return '💻';
      default: return '📌';
    }
  }

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // --- Toast Notifications ---
  function showToast(message, allowUndo = false) {
    clearTimeout(undoTimeout);
    toastContainer.innerHTML = '';

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>${message}</span>
      ${allowUndo ? '<button class="toast-undo-btn" id="toastUndoBtn">Undo</button>' : ''}
    `;

    if (allowUndo) {
      toast.querySelector('#toastUndoBtn').addEventListener('click', () => {
        undoDelete();
        toast.remove();
      });
    }

    toastContainer.appendChild(toast);

    undoTimeout = setTimeout(() => {
      toast.remove();
      lastDeletedTask = null;
    }, 4500);
  }

  // --- Canvas Celebration Confetti ---
  function checkAllCompletedCelebration() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    if (total > 0 && total === completed) {
      fireConfetti();
    }
  }

  function fireConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#6366f1', '#a855f7', '#ec4899', '#38bdf8', '#10b981', '#fbbf24'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10,
        alpha: 1,
      });
    }

    let animationFrame;
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let activeCount = 0;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.rotation += p.vr;
        p.alpha -= 0.015;

        if (p.alpha > 0) {
          activeCount++;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (activeCount > 0) {
        animationFrame = requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    update();
  }

  // --- Start Application ---
  document.addEventListener('DOMContentLoaded', init);
})();
