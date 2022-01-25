import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionPage from '../Collection/Collection';

const ShopPage: FC = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
