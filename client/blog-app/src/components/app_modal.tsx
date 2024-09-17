interface AppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose }) => {

   
    if (!isOpen) return null;

    return (

        <>
            <nav className="bg-black">

            </nav>

        </>
    );
};

export default AppModal;
