# Project REST-Rant

REST-Rant is an app where users can review restaurants.

// routes needed for this project //
Method  |        Path           |          Purpose

GET     |         /             |  Home page

GET     |     /places           |  Places index page

POST    |    /places            |  Create new place

GET     |   /places/new         | Form page for creating a new place

GET     |  /places/:id          | Details about a particular place

PUT     |  /places/:id          | Update a particular place

GET     |  /places/:id/edit     | Form page for editing an existing place

DELETE  |   /places/:id         | Delete a particular place

POST    |  /places/:id/rant     | Create a rant (comment) about a particular place

DELETE  | /places/:id/rant/:rantId  |  Delete a rant (comment) about a particular place

GET     |    *                   | 404 page (matches any route not defined above)



raspberry cake: Photo by <a href="https://unsplash.com/it/@anna_tukhfatullina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Tukhfatullina Food Photographer/Stylist</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
sushi: Photo by <a href="https://unsplash.com/pt-br/@lucbercoth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luc Bercoth</a> on <a href="https://unsplash.com/s/photos/sushi?orientation=portrait&utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  