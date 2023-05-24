SELECT DISTINCT A.CAR_ID
FROM CAR_RENTAL_COMPANY_CAR A
JOIN CAR_RENTAL_COMPANY_RENTAL_HISTORY B ON B.CAR_ID = A.CAR_ID
WHERE A.CAR_TYPE = '세단' AND B.START_DATE BETWEEN '2022-10-01' AND '2022-10-31'
ORDER BY A.CAR_ID DESC;