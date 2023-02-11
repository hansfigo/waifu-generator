import { GiHamburgerMenu } from 'react-icons/gi';
import BtnAdd from './btn';

const Navbar = ({GetImages}) => {

    return (
        <div className="flex w-full fixed bg-slate-800 bg-opacity-20 p-4 backdrop-blur-lg justify-between items-center border-b-[1px]">
            <div className='flex items-center'>
                <GiHamburgerMenu className='mr-10 h-8 w-8 cursor-pointer'></GiHamburgerMenu>
                <p className='text-4xl font-bold' >WaifuDB</p>
            </div>
            <BtnAdd GetImages={GetImages}></BtnAdd>
        </div>
    )
}

export default Navbar