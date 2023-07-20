import { Routes, Route, Link, Outlet } from 'react-router-dom';
import PlaceholderItem1 from './sections/Placeholder-item-1';
import PlaceholderItem2 from './sections/Placeholder-item-2';
import PlaceholderItem3 from './sections/Placeholder-item-3';
import PlaceholderItem4 from './sections/Placeholder-item-4';

export default function SectionMenu() {
    return (
      <Routes>
        {/* Routes in this app don't need to worry about which URL prefix they are
            mounted at. They can just assume they are mounted at /. Then, if they
            are moved under a different basename later on, all routes and links will
            continue to work. */}
            <Route path="./sections/Placeholder-item-1" element={<PlaceholderItem1 />} />
            <Route path="./sections/Placeholder-item-2" element={<PlaceholderItem2 />} />
            <Route path="./sections/Placeholder-item-3" element={<PlaceholderItem3 />} />
            <Route path="./sections/Placeholder-item-4" element={<PlaceholderItem4 />} />
      </Routes>
    );
  }
  function Layout() {
    return (
      <div>
        <h1>Welcome to the Inbox app!</h1>
  
        <p>
          This example demonstrates how you can stitch two React Router apps
          together using the <code>`basename`</code> prop on{' '}
          <code>`BrowserRouter`</code> and <code>`StaticRouter`</code>.
        </p>
  
        <Outlet />
      </div>
    );
  }