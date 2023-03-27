import BookForm from './BookForm';

// Note to self: type and interface are very similar; their differences lie in theoreticals that I don't need to worry about yet
type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle 
            bg-gray-300 bg-opacity-25"
            >
                <div 
                    className='max-w-600px w-4/5 h-96 fixed flex z-1  bg-white shadow-xl rounded overflow-y-auto'
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <div 
                    className="w-full flex flex-col"
                    >
                    <div 
                    className="flex flex-row space-apart justify-end"
                    >
                            <p 
                                className="flex justify-center m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                                onClick={props.onClose}>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </p>
                        </div>
                        <div 
                            className="flex flex-col items-center text-center mt-3 p-2"
                            >

                            <BookForm id={ props.id }/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Modal
