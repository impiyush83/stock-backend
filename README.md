# Queries
-----

## Setup:

- npm start 
- node scripts/dbSetup.js
- Hurray ! Your  setup is complete 

## Guidelines:

- Last 5 year data is created for stockId's INFY, TCS with random closing prices between 100 - 200 inclusive.
- Data is prepared excluding Sundays and Saturdays as on this days share market is closed.


## Note: All the queries in "Answers #" block should be run on mongo shell 

## Query 1  

----
```
Get prices of stock between D1 & D2
eg : Stock prices of a stock of last 10 days, currentDate and dateOf10thdayOld
```
### Answer 1 
```
db.stockupdates.find({'stockId': 'INFY', 'tradedAt': {$gte: new Date(new Date()- (10*24*3600*1000))}},{'_id':0
, 'closingPrice':1, 'tradedAt': 1, 'stockId': 1})
```

### Output

```
{
        "stockId" : "INFY",
        "closingPrice" : 177,
        "tradedAt" : ISODate("2019-12-11T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 110,
        "tradedAt" : ISODate("2019-12-10T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 139,
        "tradedAt" : ISODate("2019-12-09T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 193,
        "tradedAt" : ISODate("2019-12-06T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 164,
        "tradedAt" : ISODate("2019-12-05T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 169,
        "tradedAt" : ISODate("2019-12-04T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 157,
        "tradedAt" : ISODate("2019-12-03T17:02:34.642Z")
}

```

-----

## Query 2  

----

```
Stock prices of a mulitple stocks of last 10 days
eg : Stock prices of a mulitple stocks of last 10 days, currentDate and dateOf10thdayOld
```

### Answer 2

```
db.stockupdates.find({'stockId': {$in:['INFY', 'TCS']}, 'tradedAt': {$gte: new Date(new Date()- (10*24*3600*1000))}},{'_id':0
, 'closingPrice':1, 'tradedAt': 1, 'stockId': 1})
```

- Output

```
{
        "stockId" : "INFY",
        "closingPrice" : 177,
        "tradedAt" : ISODate("2019-12-11T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 146,
        "tradedAt" : ISODate("2019-12-11T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 110,
        "tradedAt" : ISODate("2019-12-10T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 136,
        "tradedAt" : ISODate("2019-12-10T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 139,
        "tradedAt" : ISODate("2019-12-09T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 122,
        "tradedAt" : ISODate("2019-12-09T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 193,
        "tradedAt" : ISODate("2019-12-06T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 141,
        "tradedAt" : ISODate("2019-12-06T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 164,
        "tradedAt" : ISODate("2019-12-05T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 177,
        "tradedAt" : ISODate("2019-12-05T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 169,
        "tradedAt" : ISODate("2019-12-04T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 150,
        "tradedAt" : ISODate("2019-12-04T17:02:34.642Z")
}
{
        "stockId" : "INFY",
        "closingPrice" : 157,
        "tradedAt" : ISODate("2019-12-03T17:02:34.642Z")
}
{
        "stockId" : "TCS",
        "closingPrice" : 156,
        "tradedAt" : ISODate("2019-12-03T17:02:34.642Z")
}

```

----

## Query 3 

---- 

### Query 3a

```
Get prices of a stock in the last n days
```

### Answer 3a

```
N = 7

db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: new Date(new Date()- (N*24*3600*1000))}},{'_id':0 , 'closingPrice':1, 'tradedAt': 1, 'stockId': 1})
```
### Output Last N  Days 

```
{
	"stockId" : "INFY",
	"closingPrice" : 177,
	"tradedAt" : ISODate("2019-12-11T17:02:34.642Z")
}
{
	"stockId" : "INFY",
	"closingPrice" : 110,
	"tradedAt" : ISODate("2019-12-10T17:02:34.642Z")
}
{
	"stockId" : "INFY",
	"closingPrice" : 139,
	"tradedAt" : ISODate("2019-12-09T17:02:34.642Z")
}
{
	"stockId" : "INFY",
	"closingPrice" : 193,
	"tradedAt" : ISODate("2019-12-06T17:02:34.642Z")
}
```
### Query 3b

```
Get prices of a stock in the last m months
eg: Here m = 2 taken
```

### Answer 3b

```
M = 2
oldDate = new Date()
oldDate.setMonth(oldDate.getMonth() - M)
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: oldDate}},{'_id':0 , 'closingPrice':1, 'tradedAt': 1, 'stockId': 1})
```
- Output Last 2 Months 

```
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-12-11T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 110, "tradedAt" : ISODate("2019-12-10T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-12-09T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 193, "tradedAt" : ISODate("2019-12-06T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-12-05T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 169, "tradedAt" : ISODate("2019-12-04T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 157, "tradedAt" : ISODate("2019-12-03T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 103, "tradedAt" : ISODate("2019-12-02T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-11-29T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 143, "tradedAt" : ISODate("2019-11-28T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 140, "tradedAt" : ISODate("2019-11-27T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-11-26T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-11-25T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 122, "tradedAt" : ISODate("2019-11-22T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 174, "tradedAt" : ISODate("2019-11-21T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 128, "tradedAt" : ISODate("2019-11-20T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 190, "tradedAt" : ISODate("2019-11-19T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-11-18T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 142, "tradedAt" : ISODate("2019-11-15T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 148, "tradedAt" : ISODate("2019-11-14T17:02:34.642Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-11-13T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 175, "tradedAt" : ISODate("2019-11-12T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-11-11T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 197, "tradedAt" : ISODate("2019-11-08T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 181, "tradedAt" : ISODate("2019-11-07T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 107, "tradedAt" : ISODate("2019-11-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 115, "tradedAt" : ISODate("2019-11-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-11-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 144, "tradedAt" : ISODate("2019-11-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 138, "tradedAt" : ISODate("2019-10-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-10-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 112, "tradedAt" : ISODate("2019-10-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 199, "tradedAt" : ISODate("2019-10-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-10-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 105, "tradedAt" : ISODate("2019-10-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 165, "tradedAt" : ISODate("2019-10-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 117, "tradedAt" : ISODate("2019-10-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-10-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 125, "tradedAt" : ISODate("2019-10-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 101, "tradedAt" : ISODate("2019-10-17T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 142, "tradedAt" : ISODate("2019-10-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-10-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 143, "tradedAt" : ISODate("2019-10-14T17:02:34.643Z") }
```

### Query 3c 

```
Get prices of a stock in the last x years
eg: Here x = 1  taken
```

### Answer 3c

```
X = 1
oldDate = new Date()
oldDate.setFullYear(oldDate.getFullYear() - X)
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: oldDate}},{'_id':0 , 'closingPrice':1, 'tradedAt': 1, 'stockId': 1})
```
### Output Last 1 Year

```
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-12-11T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 110, "tradedAt" : ISODate("2019-12-10T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-12-09T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 193, "tradedAt" : ISODate("2019-12-06T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-12-05T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 169, "tradedAt" : ISODate("2019-12-04T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 157, "tradedAt" : ISODate("2019-12-03T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 103, "tradedAt" : ISODate("2019-12-02T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-11-29T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 143, "tradedAt" : ISODate("2019-11-28T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 140, "tradedAt" : ISODate("2019-11-27T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-11-26T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-11-25T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 122, "tradedAt" : ISODate("2019-11-22T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 174, "tradedAt" : ISODate("2019-11-21T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 128, "tradedAt" : ISODate("2019-11-20T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 190, "tradedAt" : ISODate("2019-11-19T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-11-18T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 142, "tradedAt" : ISODate("2019-11-15T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 148, "tradedAt" : ISODate("2019-11-14T17:02:34.642Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-11-13T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 175, "tradedAt" : ISODate("2019-11-12T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-11-11T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 197, "tradedAt" : ISODate("2019-11-08T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 181, "tradedAt" : ISODate("2019-11-07T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 107, "tradedAt" : ISODate("2019-11-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 115, "tradedAt" : ISODate("2019-11-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-11-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 144, "tradedAt" : ISODate("2019-11-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 138, "tradedAt" : ISODate("2019-10-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-10-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 112, "tradedAt" : ISODate("2019-10-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 199, "tradedAt" : ISODate("2019-10-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-10-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 105, "tradedAt" : ISODate("2019-10-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 165, "tradedAt" : ISODate("2019-10-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 117, "tradedAt" : ISODate("2019-10-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-10-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 125, "tradedAt" : ISODate("2019-10-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 101, "tradedAt" : ISODate("2019-10-17T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 142, "tradedAt" : ISODate("2019-10-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-10-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 143, "tradedAt" : ISODate("2019-10-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 150, "tradedAt" : ISODate("2019-10-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 193, "tradedAt" : ISODate("2019-10-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 102, "tradedAt" : ISODate("2019-10-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 175, "tradedAt" : ISODate("2019-10-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 176, "tradedAt" : ISODate("2019-10-07T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-10-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 135, "tradedAt" : ISODate("2019-10-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 172, "tradedAt" : ISODate("2019-10-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 104, "tradedAt" : ISODate("2019-10-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 189, "tradedAt" : ISODate("2019-09-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 106, "tradedAt" : ISODate("2019-09-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 168, "tradedAt" : ISODate("2019-09-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 120, "tradedAt" : ISODate("2019-09-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 153, "tradedAt" : ISODate("2019-09-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 102, "tradedAt" : ISODate("2019-09-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 191, "tradedAt" : ISODate("2019-09-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 160, "tradedAt" : ISODate("2019-09-19T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 158, "tradedAt" : ISODate("2019-09-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-09-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 124, "tradedAt" : ISODate("2019-09-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2019-09-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 129, "tradedAt" : ISODate("2019-09-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-09-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-09-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 109, "tradedAt" : ISODate("2019-09-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 160, "tradedAt" : ISODate("2019-09-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 184, "tradedAt" : ISODate("2019-09-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 127, "tradedAt" : ISODate("2019-09-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 197, "tradedAt" : ISODate("2019-09-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 109, "tradedAt" : ISODate("2019-09-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 175, "tradedAt" : ISODate("2019-08-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 127, "tradedAt" : ISODate("2019-08-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 170, "tradedAt" : ISODate("2019-08-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 156, "tradedAt" : ISODate("2019-08-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 198, "tradedAt" : ISODate("2019-08-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 176, "tradedAt" : ISODate("2019-08-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 105, "tradedAt" : ISODate("2019-08-22T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-08-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 141, "tradedAt" : ISODate("2019-08-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 156, "tradedAt" : ISODate("2019-08-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 124, "tradedAt" : ISODate("2019-08-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-08-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 101, "tradedAt" : ISODate("2019-08-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-08-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 118, "tradedAt" : ISODate("2019-08-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2019-08-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 193, "tradedAt" : ISODate("2019-08-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 123, "tradedAt" : ISODate("2019-08-07T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 166, "tradedAt" : ISODate("2019-08-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 104, "tradedAt" : ISODate("2019-08-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 200, "tradedAt" : ISODate("2019-08-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 156, "tradedAt" : ISODate("2019-08-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 141, "tradedAt" : ISODate("2019-07-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 181, "tradedAt" : ISODate("2019-07-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 108, "tradedAt" : ISODate("2019-07-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 186, "tradedAt" : ISODate("2019-07-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 176, "tradedAt" : ISODate("2019-07-25T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 147, "tradedAt" : ISODate("2019-07-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 193, "tradedAt" : ISODate("2019-07-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-07-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 191, "tradedAt" : ISODate("2019-07-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-07-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 137, "tradedAt" : ISODate("2019-07-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 110, "tradedAt" : ISODate("2019-07-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 110, "tradedAt" : ISODate("2019-07-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 126, "tradedAt" : ISODate("2019-07-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 108, "tradedAt" : ISODate("2019-07-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 116, "tradedAt" : ISODate("2019-07-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 195, "tradedAt" : ISODate("2019-07-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 120, "tradedAt" : ISODate("2019-07-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 103, "tradedAt" : ISODate("2019-07-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 141, "tradedAt" : ISODate("2019-07-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-07-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 148, "tradedAt" : ISODate("2019-07-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-07-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-06-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 120, "tradedAt" : ISODate("2019-06-27T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 124, "tradedAt" : ISODate("2019-06-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 147, "tradedAt" : ISODate("2019-06-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 198, "tradedAt" : ISODate("2019-06-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 177, "tradedAt" : ISODate("2019-06-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 119, "tradedAt" : ISODate("2019-06-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 115, "tradedAt" : ISODate("2019-06-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 130, "tradedAt" : ISODate("2019-06-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 131, "tradedAt" : ISODate("2019-06-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 144, "tradedAt" : ISODate("2019-06-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-06-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 104, "tradedAt" : ISODate("2019-06-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 120, "tradedAt" : ISODate("2019-06-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 148, "tradedAt" : ISODate("2019-06-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 103, "tradedAt" : ISODate("2019-06-07T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 118, "tradedAt" : ISODate("2019-06-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 138, "tradedAt" : ISODate("2019-06-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 187, "tradedAt" : ISODate("2019-06-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-06-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 149, "tradedAt" : ISODate("2019-05-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 167, "tradedAt" : ISODate("2019-05-30T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 147, "tradedAt" : ISODate("2019-05-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 167, "tradedAt" : ISODate("2019-05-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 188, "tradedAt" : ISODate("2019-05-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 181, "tradedAt" : ISODate("2019-05-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 129, "tradedAt" : ISODate("2019-05-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 191, "tradedAt" : ISODate("2019-05-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 190, "tradedAt" : ISODate("2019-05-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 174, "tradedAt" : ISODate("2019-05-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 130, "tradedAt" : ISODate("2019-05-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-05-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 183, "tradedAt" : ISODate("2019-05-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-05-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 167, "tradedAt" : ISODate("2019-05-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 160, "tradedAt" : ISODate("2019-05-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 196, "tradedAt" : ISODate("2019-05-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 185, "tradedAt" : ISODate("2019-05-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 101, "tradedAt" : ISODate("2019-05-07T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-05-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 173, "tradedAt" : ISODate("2019-05-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-05-02T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 196, "tradedAt" : ISODate("2019-05-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-04-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 183, "tradedAt" : ISODate("2019-04-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 126, "tradedAt" : ISODate("2019-04-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 147, "tradedAt" : ISODate("2019-04-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 156, "tradedAt" : ISODate("2019-04-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 133, "tradedAt" : ISODate("2019-04-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 161, "tradedAt" : ISODate("2019-04-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 116, "tradedAt" : ISODate("2019-04-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-04-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 138, "tradedAt" : ISODate("2019-04-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 188, "tradedAt" : ISODate("2019-04-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 183, "tradedAt" : ISODate("2019-04-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 160, "tradedAt" : ISODate("2019-04-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 174, "tradedAt" : ISODate("2019-04-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 172, "tradedAt" : ISODate("2019-04-10T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-04-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-04-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 168, "tradedAt" : ISODate("2019-04-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 149, "tradedAt" : ISODate("2019-04-04T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-04-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 126, "tradedAt" : ISODate("2019-04-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 129, "tradedAt" : ISODate("2019-04-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 188, "tradedAt" : ISODate("2019-03-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 158, "tradedAt" : ISODate("2019-03-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 129, "tradedAt" : ISODate("2019-03-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 198, "tradedAt" : ISODate("2019-03-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 105, "tradedAt" : ISODate("2019-03-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 187, "tradedAt" : ISODate("2019-03-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 186, "tradedAt" : ISODate("2019-03-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 196, "tradedAt" : ISODate("2019-03-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 184, "tradedAt" : ISODate("2019-03-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 166, "tradedAt" : ISODate("2019-03-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 152, "tradedAt" : ISODate("2019-03-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 168, "tradedAt" : ISODate("2019-03-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 168, "tradedAt" : ISODate("2019-03-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2019-03-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 106, "tradedAt" : ISODate("2019-03-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 152, "tradedAt" : ISODate("2019-03-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 190, "tradedAt" : ISODate("2019-03-07T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 196, "tradedAt" : ISODate("2019-03-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 154, "tradedAt" : ISODate("2019-03-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 122, "tradedAt" : ISODate("2019-03-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 162, "tradedAt" : ISODate("2019-03-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 135, "tradedAt" : ISODate("2019-02-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 165, "tradedAt" : ISODate("2019-02-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 170, "tradedAt" : ISODate("2019-02-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-02-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-02-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 171, "tradedAt" : ISODate("2019-02-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-02-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 178, "tradedAt" : ISODate("2019-02-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 112, "tradedAt" : ISODate("2019-02-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 150, "tradedAt" : ISODate("2019-02-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-02-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 161, "tradedAt" : ISODate("2019-02-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-02-12T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 187, "tradedAt" : ISODate("2019-02-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 198, "tradedAt" : ISODate("2019-02-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 191, "tradedAt" : ISODate("2019-02-07T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 121, "tradedAt" : ISODate("2019-02-06T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-02-05T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 113, "tradedAt" : ISODate("2019-02-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 174, "tradedAt" : ISODate("2019-02-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 123, "tradedAt" : ISODate("2019-01-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 124, "tradedAt" : ISODate("2019-01-30T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 164, "tradedAt" : ISODate("2019-01-29T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-01-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-01-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 138, "tradedAt" : ISODate("2019-01-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-01-23T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 176, "tradedAt" : ISODate("2019-01-22T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 159, "tradedAt" : ISODate("2019-01-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 160, "tradedAt" : ISODate("2019-01-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 188, "tradedAt" : ISODate("2019-01-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 182, "tradedAt" : ISODate("2019-01-16T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2019-01-15T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2019-01-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 148, "tradedAt" : ISODate("2019-01-11T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 108, "tradedAt" : ISODate("2019-01-10T17:02:34.643Z") }
Type "it" for more
> it
{ "stockId" : "INFY", "closingPrice" : 126, "tradedAt" : ISODate("2019-01-09T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 166, "tradedAt" : ISODate("2019-01-08T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 106, "tradedAt" : ISODate("2019-01-07T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 175, "tradedAt" : ISODate("2019-01-04T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 116, "tradedAt" : ISODate("2019-01-03T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 129, "tradedAt" : ISODate("2019-01-02T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 125, "tradedAt" : ISODate("2019-01-01T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 114, "tradedAt" : ISODate("2018-12-31T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 169, "tradedAt" : ISODate("2018-12-28T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 171, "tradedAt" : ISODate("2018-12-27T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 109, "tradedAt" : ISODate("2018-12-26T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2018-12-25T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 117, "tradedAt" : ISODate("2018-12-24T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 124, "tradedAt" : ISODate("2018-12-21T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 127, "tradedAt" : ISODate("2018-12-20T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 137, "tradedAt" : ISODate("2018-12-19T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 167, "tradedAt" : ISODate("2018-12-18T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 143, "tradedAt" : ISODate("2018-12-17T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 119, "tradedAt" : ISODate("2018-12-14T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 109, "tradedAt" : ISODate("2018-12-13T17:02:34.643Z") }
```

----

## Query 4 

----
### Query 4a
```
Get prices of a stock in the last 30 days, weekly
eg: Here Weekly is Sunday    
```

### Answer 4a

```
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: new Date(new Date() - (30*24*3600*1000))}, $where: function(){  return this.tradedAt.getDay() == 0 }})
```
Output
```
```
### Query 4b
```
Get prices of a stock in the last 30 days, weekly
eg: Here Weekly is Saturday    
```

### Answer 4a

```
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: new Date(new Date() - (30*24*3600*1000))}, $where: function(){  return this.tradedAt.getDay() == 6 }})
```
Output
```
```

### Query 4c
```
Get prices of a stock in the last 30 days, weekly
eg: Here Weekly is Monday    
```

### Answer 4c

```
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: new Date(new Date() - (30*24*3600*1000))}, $where: function(){  return this.tradedAt.getDay() ==1 }}, {_id:0, closingPrice:1, tradedAt: 1, stockId:1})
```
Output
```
{ "stockId" : "INFY", "closingPrice" : 139, "tradedAt" : ISODate("2019-12-09T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 103, "tradedAt" : ISODate("2019-12-02T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 155, "tradedAt" : ISODate("2019-11-25T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 134, "tradedAt" : ISODate("2019-11-18T17:02:34.642Z") }
```


### Query 4d
```
Get prices of a stock in the last 365 days, monthly frequency. 
eg: Here *monthly is depending on current date* 
```

### Answer 4d

```
db.stockupdates.find({'stockId': "INFY", 'tradedAt': {$gte: new Date(new Date() - (365*24*3600*1000))}, $where: function(){  return this.tradedAt.getDate() == new Date().getDate() }}, {_id:0, closingPrice:1, tradedAt: 1, stockId:1})
```
### Output

**Here only 8 outputs because other on 13th of each month data does not exist due to holidays**

```
{ "stockId" : "INFY", "closingPrice" : 163, "tradedAt" : ISODate("2019-11-13T17:02:34.642Z") }
{ "stockId" : "INFY", "closingPrice" : 151, "tradedAt" : ISODate("2019-09-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-08-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 132, "tradedAt" : ISODate("2019-06-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 167, "tradedAt" : ISODate("2019-05-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 168, "tradedAt" : ISODate("2019-03-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 161, "tradedAt" : ISODate("2019-02-13T17:02:34.643Z") }
{ "stockId" : "INFY", "closingPrice" : 109, "tradedAt" : ISODate("2018-12-13T17:02:34.643Z") }
```
--- 

## Query 5 

**The holidays is covered in the above section only as we have prepared sample data which does not contain any sundays and saturdays as the market is closed on those days**

--- 

# Caching 

--- 

We can create cache data for the standard queries such as 1M, 5M, MAX time duration. A cron job will do the job of updating the cache. For fallback pattern if the key is not present in the cache,we will hit the mongo db to fetch the results. 
 

---
