SELECT 
    HISTORY_ID,
    ROUND((DAILY_FEE * (100 - IFNULL(DISCOUNT_RATE, 0)) /100) * PERIOD) AS FEE
FROM 
    ( SELECT CAR.CAR_ID, CAR.CAR_TYPE, DAILY_FEE, HISTORY_ID, TIMESTAMPDIFF(DAY, START_DATE, END_DATE) + 1 AS PERIOD,
            CASE WHEN TIMESTAMPDIFF(DAY, START_DATE, END_DATE) + 1 >= 90 THEN '90일 이상'
                 WHEN TIMESTAMPDIFF(DAY, START_DATE, END_DATE) + 1 >= 30 THEN '30일 이상'
                 WHEN TIMESTAMPDIFF(DAY, START_DATE, END_DATE) + 1 >= 7 THEN '7일 이상'
                 ELSE '7일 미만' END AS DURATION_TYPE
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY AS A
        INNER JOIN CAR_RENTAL_COMPANY_CAR AS CAR ON CAR.CAR_ID = A.CAR_ID
    ) AS PERIOD_TABLE
LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN AS B ON PERIOD_TABLE.CAR_TYPE = B.CAR_TYPE
        AND PERIOD_TABLE.DURATION_TYPE = B.DURATION_TYPE
WHERE PERIOD_TABLE.CAR_TYPE = '트럭'
ORDER BY FEE DESC, HISTORY_ID DESC