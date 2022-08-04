# BACKEND

Backend section of nupp website project.

## Current State

**Currently**
Creating coonection between frontend and backend, creating endpoints, implementing jwt authentification (refresh, access tokens).

JWT access token will only be sent in headers and refresh token in request body for now, in future I will implement this functionality so it can be sent through cookies.

## To Do

- [ ] Functionality
  - [ ] All inputs need revision according seo best practices
  - [ ] Forms sections needs to be wrapped in `fieldset` element

- [ ] Endpoints
  - [ ] These needs to be added:
    - [ ] Alergens
    - [ ] Categories
    - [ ] Brands
    - [ ] Vendors
    - [ ] Products
    - [ ] Meals
    - [ ] Users
    - [ ] Food Additives
    - [ ] Marks
  - [ ] Auth add correct status codes and messages to responses

- [ ] Database
  - [ ] Add Array of added products & meals to User Schema
