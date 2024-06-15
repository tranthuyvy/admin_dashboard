import PropTypes from 'prop-types';
import { IoBagHandle } from "react-icons/io5";

const DashboardStatisGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-400'>
          <IoBagHandle className='text-white text-2xl' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-medium'>Total</span>
          <div className='flex items-center'>
            <strong className='text-xl font-semibold text-sky-700'>{(6868000).toLocaleString('en')} VNĐ</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-400'>
          <IoBagHandle className='text-white text-2xl' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-medium'>Total</span>
          <div className='flex items-center'>
            <strong className='text-xl font-semibold text-orange-500'>{(6868000).toLocaleString('en')} VNĐ</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-main'>
          <IoBagHandle className='text-white text-2xl' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-medium'>Total</span>
          <div className='flex items-center'>
            <strong className='text-xl font-semibold text-red'>{(6868000).toLocaleString('en')} VNĐ</strong>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green'>
          <IoBagHandle className='text-white text-2xl' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-400 font-medium'>Total</span>
          <div className='flex items-center'>
            <strong className='text-xl font-semibold text-green'>{(6868000).toLocaleString('en')} VNĐ</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

export default DashboardStatisGrid

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md p-4 flex-1 border-gray-200 flex items-center">
      {children}
    </div>
  )
}

BoxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};