import {Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/Home.tsx';
import { ProductsPage } from './pages/Products.tsx';


export const RouterElement = () => {
    return (<Routes>
        <Route index path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
    </Routes>)
}

