# Project

> Simple proxy to practice Service Oriented Architecture by building an AirBnB-Clone consisting of 4 services

## Related Projects

- [Rooms](https://github.com/rpt09-mulder/rooms)
- [Gallery](https://github.com/rpt09-mulder/gallery)
- [Booking](https://github.com/rpt09-mulder/booking)
- [Reviews](https://github.com/rpt09-mulder/reviews)

## Table of Contents

1. [Requirements](#Requirements)
1. [Installation](#Installation)
1. [Example](#Example)

## Requirements

- Node v10.12.0
- MongoDB v4.0.3
- NPM v6.5.0

## Installation
*PLEASE NOTE:* You must clone and start all [four services](#Related-Projects) before installing and starting this proxy.

Go to the root directory then install all required dependencies by running

```sh
npm install
```

then start the server by running

```sh
npm start
```

finally, on your browser go to http://localhost:3000

## Example

The REST API will display a valid item page for all `IDs` between `1` to `100`.

For example, `http://localhost:3000/1` to `http://localhost:3000/100`

![](example.gif)