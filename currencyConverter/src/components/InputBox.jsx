function InputBox({label, className ="",}){  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 infinite-block">label</label>
        <input 
          className="outline-none w-full"
          />
      </div>
    </div>
  )
}