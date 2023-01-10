const BookInstance = require("../models/bookinstance");

// Display list of all BookInstances.
bookinstance_list = (req, res, next) => {
  BookInstance.find()
  .populate("book")
  .exec(function (err, list_bookinstances) {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("bookinstance_list", {
      title: "Book Instance List",
      bookinstance_list: list_bookinstances,
    });
  });
};

// Display detail page for a specific BookInstance.
bookinstance_detail = (req, res, next) => {
  BookInstance.findById(req.params.id)
  .populate("book")
  .exec(function (err, bookinstance) {
    if (err) {
      return next(err);
    }
    if (bookinstance == null) {
      // No results.
      var err = new Error("Book copy not found");
      err.status = 404;
      return next(err);
    }
    // Successful, so render.
    res.render("bookinstance_detail", {
      title: "Copy: " + bookinstance.book.title,
      bookinstance: bookinstance,
    });
  });
};

// Display BookInstance create form on GET.
bookinstance_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
bookinstance_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
bookinstance_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
bookinstance_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
bookinstance_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
bookinstance_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};

module.exports = {
    bookinstance_list,
    bookinstance_detail,
    bookinstance_create_get,
    bookinstance_create_post,
    bookinstance_delete_get,
    bookinstance_delete_post,
    bookinstance_update_get,
    bookinstance_update_post
}