/**
 * DOM Project 1 - Interactive Shopping Cart
 * Handlers for Quantity (+/-), Item Deletion, Heart Like, and Dynamic Total Price Calculation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const totalPriceElement = document.querySelector('.total');
  const plusButtons = document.querySelectorAll('.fa-plus-circle');
  const minusButtons = document.querySelectorAll('.fa-minus-circle');
  const deleteButtons = document.querySelectorAll('.fa-trash-alt');
  const heartButtons = document.querySelectorAll('.fa-heart');

  /**
   * Recalculates and updates the total price based on active products and quantities
   */
  function updateTotalPrice() {
    let total = 0;

    // Select all remaining product cards inside the list
    const productCards = document.querySelectorAll('.list-products > .card-body');

    productCards.forEach((cardContainer) => {
      const unitPriceElement = cardContainer.querySelector('.unit-price');
      const quantityElement = cardContainer.querySelector('.quantity');

      if (unitPriceElement && quantityElement) {
        // Extract numeric price from text (e.g. "100 $" -> 100)
        const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', '').trim()) || 0;
        const quantity = parseInt(quantityElement.textContent.trim(), 10) || 0;

        total += unitPrice * quantity;
      }
    });

    // Update total display (e.g. "120 $")
    if (totalPriceElement) {
      totalPriceElement.textContent = `${total} $`;
    }
  }

  /**
   * 1. Quantity Adjustment ("+" and "-")
   */
  // Plus Buttons (+)
  plusButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const quantityElement = btn.parentElement.querySelector('.quantity');
      if (quantityElement) {
        let currentQty = parseInt(quantityElement.textContent, 10) || 0;
        quantityElement.textContent = currentQty + 1;
        updateTotalPrice();
      }
    });
  });

  // Minus Buttons (-)
  minusButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const quantityElement = btn.parentElement.querySelector('.quantity');
      if (quantityElement) {
        let currentQty = parseInt(quantityElement.textContent, 10) || 0;
        // Prevent quantity from dropping below 0
        if (currentQty > 0) {
          quantityElement.textContent = currentQty - 1;
          updateTotalPrice();
        }
      }
    });
  });

  /**
   * 2. Delete Items from Cart
   */
  deleteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Find the parent card container representing this product
      const productCard = btn.closest('.card-body');
      if (productCard) {
        // If nested inside outer card-body, remove the outer product container
        const outerContainer = productCard.closest('.list-products > .card-body') || productCard;
        outerContainer.remove();
        updateTotalPrice();
      }
    });
  });

  /**
   * 3. Like Items (Clickable Heart Button)
   */
  heartButtons.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('liked');

      // Toggle color between red and black for visual feedback
      if (heart.classList.contains('liked')) {
        heart.style.color = 'red';
      } else {
        heart.style.color = 'black';
      }
    });
  });

  // Initial calculation on load
  updateTotalPrice();
});
