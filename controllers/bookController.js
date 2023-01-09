const Book = require("../models/book");

index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
book_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
book_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
book_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
book_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
book_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
book_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
book_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
book_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};

module.exports = {
    index,
    book_list,
    book_detail,
    book_create_get,
    book_create_post,
    book_delete_get,
    book_delete_post,
    book_update_get,
    book_update_post
};