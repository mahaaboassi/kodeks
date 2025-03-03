"use client"
import Hero from "@/components/hero/page"
import Style from "./page.module.css"
// for validation 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = yup.InferType<typeof schema>;

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    company: yup.string().required("Company is required"),
    jobTitle: yup.string().required("Job Title is required"),
    country: yup.string().required("Country is required"),
    phone: yup.string().matches(/^\d+$/, "Phone must be numeric").required("Phone is required"),
    message: yup.string().required("Message is required"),
});

const ContactUs = ()=>{
    const {register,handleSubmit,formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema) as any,
    });

    const onSubmit = (formData: FormData) => {
        console.log("Form Submitted", formData);
        // You can send this data to an API using fetch or axios
    };
    return<div className={`${Style.container} pb-16`}>
        <Hero title="Contact Us" description="How can we help?" link="/" pathFirst="Home" pathSecond="Contact Us" />
        <div className={`${Style.content} pt-10 px-8 md:px-16`}>
            To submit a question or request, please fill out the form. We will respond as soon as possible.
        </div>
        <div className={`${Style.temp}`}></div>
        <div className={`${Style.containerContent} px-8 md:px-16`}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label> Name :</label>
                        <input {...register("name")} type="text" placeholder="Name" />
                        <p className="text-red-500">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label> Email :</label>
                        <input {...register("email")} type="text" placeholder="Email" />
                        <p className="text-red-500">{errors.email?.message}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label> Company :</label>
                        <input {...register("company")} type="text" placeholder="Company" />
                        <p className="text-red-500">{errors.company?.message}</p>
                    </div>
                    <div>
                        <label> Job Title :</label>
                        <input {...register("jobTitle")} type="text" placeholder="Job Title" />
                        <p className="text-red-500">{errors.jobTitle?.message}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    
                    <div>
                        <label> Country :</label>
                        <input {...register("country")} type="text" placeholder="Country" />
                        <p className="text-red-500">{errors.country?.message}</p>
                    </div>
                    <div>
                        <label> Phone :</label>
                        <input {...register("phone")} type="text" placeholder="Phone" />
                        <p className="text-red-500">{errors.phone?.message}</p>
                    </div>
                </div>
                <div>
                    <label> Message :</label>
                    <textarea {...register("message")} placeholder="Message" />
                    <p className="text-red-500">{errors.message?.message}</p>
                </div>
                <div>
                    <button className="btn-dark">Submit</button>
                </div>
            </form>
        </div>
    </div>
}
export default ContactUs