import React from "react";
import MainLayout from "../Layout/MainLayout";
import BookDetail from "../Components/BookDetail/BookDetail";
import BookSummary from "../Components/BookSummary/BookSummary";
import AddOne from "../Components/AddOne/AddOne";
import FeedBack from "../Components/FeedBack/FeedBack";
import AddTwo from "../Components/AddTwo/AddTwo";
import MoreBooks from "../Components/MoreBooks/MoreBooks";

function MainRoute() {
  return (
    <MainLayout>
      <BookDetail />
      <BookSummary />
      <AddOne />
      <FeedBack />
      <AddTwo />
      <MoreBooks />
    </MainLayout>
  );
}

export default MainRoute;
