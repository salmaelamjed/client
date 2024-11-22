import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/shared"; 


const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading,error,records } = useAppSelector(
    (state) => state.categories
  );
  console.log(records)

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);



  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList 
        records={records}
        renderItem={(record) => <Category {...record}/>}
        />
      </Loading>
    </Container>
  );
};

export default Categories;