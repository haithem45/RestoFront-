import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FoodsList from '../components/dashboard/foodsList'

function Dashboard() {
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const user= useSelector((state) => state.auth)
  // const products= useSelector((state) => state.product.products)
  // const categories= useSelector((state) => state.category.categories)


  useEffect(() => {

    if (!user) {
      navigate('/')
    }
    // dispatch(fetchProduct())
    // dispatch(fetchCategory())
    // dispatch(getCurrentUser(user.id))

  }, [user])

  // console.log(products)
  // console.log(user)

  return (
    <>         
     <FoodsList />
      {/* <section className='heading'>
        <div style={{border:'solid red 1px'}}>
          <ul>
          {products.map(product => (
            <Grid key={product._id} xs={12} md={3} item>
              <ProductCard item={product}/>
            </Grid>
          ))}
        </ul>
        </div>
      </section> */}
    </>
  )
}

export default Dashboard