import React from "react";
import TopBar from "./components/TopBar";
import PrimaryHeader from "./components/PrimaryHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Showcase from "./components/Showcase";
import ShopCategory from "./components/ShopCategory";
import Recommended from "./components/Recommended";
import ExcitingOffers from "./components/ExcitingOffers";
import OurVendors from "./components/OurVendors";
import AboutSanaa from "./components/AboutSanaa";
import PopularItems from "./components/PopularItems";
import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <PrimaryHeader />
      <SecondaryHeader />
      <Showcase />
      <ShopCategory />
      <Recommended />
      <ExcitingOffers />
      <OurVendors />
      <AboutSanaa />
      <PopularItems />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default App;
