import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { productsCleanUp } from "@store/products/act/productsSlice";
import {actGetProductsByCatPrefix} from "@store/products/act/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/shared";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  

  return (
    <Container>
    <Loading status={loading} error={error}>
      <GridList 
      records={records}
      renderItem={(record) => <Product {...record}/>}
      />
    </Loading>
  </Container>
  );
};

export default Products;