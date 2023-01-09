const Author = require("../models/author");

// Display list of all Authors.
author_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};

module.exports = {
    author_list,
    author_detail,
    author_create_get,
    author_create_post,
    author_delete_get,
    author_delete_post,
    author_update_get,
    author_update_post
    
}