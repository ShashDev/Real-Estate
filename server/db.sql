CREATE TABLE CUSTOMERS (
    id SERIAL PRIMARY KEY
    customer_name VARCHAR(100) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR(100),
    city VARCHAR(50) ,
    state VARCHAR(50),
);