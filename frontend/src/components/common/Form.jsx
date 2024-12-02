import { Button } from '../ui/button';
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

const Form = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {
    function renderInputsByComponentType(getControlItem) {
        let element = null;
        let value = formData[getControlItem.name] || ""        

        switch (getControlItem.componenttype) {
            case "input":
                element = (
                    <input className='outline-none border-b-4 border-l-4 border-gray-700 rounded-sm pl-3'
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.name}
                        type={getControlItem.type}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [getControlItem.name]: e.target.value
                        })}
                    />)
                break;

            case "textarea":
                element = (
                    <Textarea
                        name={getControlItem.name}
                        placeholder={getControlItem.placeholder}
                        id={getControlItem.id}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [getControlItem.name]: e.target.value
                        })} />)
                break;

            case "select":
                element = (
                    <Select value={value} onValueChange={(value)=>setFormData({
                        ...formData,
                        [getControlItem.name] : value
                    })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={getControlItem.label} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && getControlItem.options.length > 0 ?
                                    getControlItem.options.map((optionItem) => <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                        </SelectContent>
                    </Select>
                )
                break;

            default:
                element = (
                    <input name={getControlItem.name} placeholder={getControlItem.placeholder} id={getControlItem.name} type={getControlItem.type}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [getControlItem.name]: e.target.value
                        })} />
                )
                break;
        }
        return element
    }
    return (
        <form onSubmit={onSubmit} >
            <div className='flex flex-col gap-3'>
                {
                    formControls.map((controlItem) => <div className='grid w-full gap-1.5' key={controlItem.name}>
                        <Label className="mb-1 font-extrabold ">{controlItem.label}</Label>
                        {
                            renderInputsByComponentType(controlItem)
                        }
                    </div>
                    )
                }
            </div>
            <Button className="mt-8 w-full">{buttonText || "Submit"}</Button>
        </form>
    )
}

export default Form