//Algorithm SentenceStatistics

Variables:
    ch : CHARACTER
    length ← 0
    words ← 1
    vowels ← 0

BEGIN

    READ ch

    WHILE ch <> '.' DO

        length ← length + 1

        IF ch = ' ' THEN
            words ← words + 1
        ENDIF

        IF ch = 'a' OR ch = 'e' OR ch = 'i' OR ch = 'o' OR ch = 'u'
           OR ch = 'A' OR ch = 'E' OR ch = 'I' OR ch = 'O' OR ch = 'U' THEN
            vowels ← vowels + 1
        ENDIF

        READ ch

    ENDWHILE

    length ← length + 1      // Count the final period

    PRINT "Length = ", length
    PRINT "Words = ", words
    PRINT "Vowels = ", vowels

END