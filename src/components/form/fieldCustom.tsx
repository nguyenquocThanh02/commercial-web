import React from "react";

import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form";
import {InputPrimary} from "../custom/inputPrimary.component";

import {cn} from "@/libs/utils";

type FormFieldInputType = {
  control?: any;
  name: string;
  label?: string;
  classNameInput?: string;
  className?: string;
  placeholder?: string;
};
const FormFieldCustom: React.FC<FormFieldInputType> = ({
  control,
  name,
  label,
  classNameInput,
  className,
  placeholder,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({field}) => (
        <FormItem className={cn(className, "")}>
          <FormLabel className="leading-6 text-Text2/40">{label}</FormLabel>
          <FormControl>
            <InputPrimary {...field} className={cn(classNameInput, "")} placeholder={placeholder} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
