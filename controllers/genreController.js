const Genre = require("../models/genre");

// Display list of all Genre.
genre_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
genre_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

// Display Genre create form on GET.
genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};

module.exports = {
    genre_list,
    genre_detail,
    genre_create_get,
    genre_create_post,
    genre_delete_get,
    genre_delete_post,
    genre_update_get,
    genre_update_post
}