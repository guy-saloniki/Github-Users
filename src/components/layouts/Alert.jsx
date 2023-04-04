import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        <p className="flex text-base font-semibold leading-7 text-rose-700">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
};

export default Alert;
