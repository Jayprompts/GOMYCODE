---------------------------------------
PSEUDO CODES
---------------------------------------

area = L * B
#Algorithm for area_of_square
Step1: Start
Step2: Read L,B
Step3: Area := L * B
Step4: print(Area)
Step5: End

#Algorithm to Determine if a number inputted is even or odd

Step1: Start
Step2: Read  (number_inputted)
Step3: If ( number_inputted % 2 = 0 )
       Print ("Even number detected")
       else,
       Print ("Odd number detected")
Step4: End

------------------------------------------
ALGO CODES
------------------------------------------

VAR
       N: INTEGER;
BEGIN
       Read (N)
       IF (N % 2 == 0) THEN
              Print ("Even Number Detected!")
       ELSE
              Print ("Odd Number Detected!")
       END_IF
END

--------------------------------------------


VAR
       acct_no, pin : INTEGER;
       amt_inputted, acct_balance : FLOAT;
BEGIN
       Read (acct_no) Read (pin) Read (amt_inputted) Read (acct_balance)

       if ( amt_inputted > acct_balance ) THEN
              Print ("Withdraw Successful")
       else
              Print ("Insufficient Balance")
       END IF
END

----------------------------------------------


VAR
       No1, No2, No3 : INTEGER;
BEGIN
       Read (No1) Read (No2) Read (No3)

       if (No1 > No2) AND (No1 > No3) THEN
              Print ("No1 is the Largest Number!")
       else if (No2 > No1) AND (No2 > No3) THEN
              Print ("No2 is the Largest Number")
       else if (No3 > No1) AND (No3 > No2) THEN
               Print ("No3 is the Largest Number!")
       END_IF
END

----------------------------------------------


VAR
       N : INTEGER;
