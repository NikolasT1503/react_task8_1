import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const { register, handleSubmit, watch } = useForm();
  watch('name'); 
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label>Имя</label>
        <input {...register('name')} defaultValue="Вася"/>
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;
