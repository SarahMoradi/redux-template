import { Button, Table } from 'reactstrap'

import { connect } from 'react-redux'
import { getAllProducts } from '../stateManagment/actions/productThunkAction'
import { useEffect } from 'react'

const ProductListWithThunk = (props) => {
  {
    console.log(props, 'dfdfssfd')
  }
  useEffect(() => {
    props.getAll()
  }, [])
  return (
    <div className='mt-5'>
      <h5>Product List With Thunk</h5>
      {props.isLoading ? <div>Loading data from server ...</div> : null}
      {props.message ? <div>{props.message}</div> : null}
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return (
              <tr key={item.productId}>
                <th scope='row'>{item.productId}</th>
                <td>{item.productName}</td>
                <td>
                  {`$`}
                  {item.unitPrice}
                </td>
                <td className='text-center'>
                  <Button
                    color='danger'
                    onClick={() => props.remove(item.productId)}
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

function mapStateToProps(state) {
    console.log(state.productThunkState, 'state')
  return {
    items: state.productThunkState.items,
    isLoading: state.productThunkState.isLoading,
    message: state.productThunkState.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => getAllProducts(dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListWithThunk)
