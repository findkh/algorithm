import datetime

def solution(a, b):
    day = datetime.date(2016, a, b)
    dateDict = {0:"MON", 1:"TUE", 2:"WED", 3:"THU", 4:"FRI", 5:"SAT", 6:"SUN"}
    return dateDict[day.isoweekday() -1]