import PickupListManager from './PickupListManager';
import { Alert } from 'react-bootstrap';
import { useState } from "react";

function WarehouseManagerOrders(props) {

  const [prepareAlert, setPrepareAlert] = useState(false);

  let b = 1;

  return (
    <div className="row">
      <span className="d-block text-center mt-5 mb-2 display-1">
        Orders to be prepared
      </span>
      <h5 className="d-block mx-auto mb-5 text-center text-muted">
        View orders and confirm their preparation for pick-up
      </h5>

      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        {prepareAlert &&
          <Alert
            variant={prepareAlert.variant}
            className='my-3 mx-2'
            dismissible={true}
            onClose={() => setPrepareAlert(null)}
          >
            {prepareAlert.msg}
          </Alert>
        }
        <PickupListManager
          orders={props.orders}
          clients={props.clients}
          products={props.products}
          time={props.time}
          setPrepareAlert={setPrepareAlert}
          b={b} />
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
}

export default WarehouseManagerOrders;