interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If modal is not open, return nothing

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-6">This is the modal content.</p>
        <button
          onClick={onClose} // Call onClose when the button is clicked
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AppModal;
