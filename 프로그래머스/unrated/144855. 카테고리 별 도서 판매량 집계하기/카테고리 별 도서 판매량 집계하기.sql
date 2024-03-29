SELECT B.CATEGORY, SUM(SALES) TOTAL_SALES
FROM BOOK_SALES A
LEFT JOIN BOOK B ON B.BOOK_ID=A.BOOK_ID
WHERE SALES_DATE LIKE '2022-01%'
GROUP BY CATEGORY
HAVING SUM(SALES) 
ORDER BY CATEGORY 