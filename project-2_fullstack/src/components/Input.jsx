const Input = ({ value, onChange, onEnterPress}) => {

   const handleKewDown = (e) => {
      if (e.key === 'Enter') {
         onEnterPress();
      }
   }

   return (
      <div className="input-container">
         <input 
            type="text" 
            value={value}  
            placeholder="Pesquise"
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => handleKewDown(e)}
         />
      </div>
   );
};

export default Input;
