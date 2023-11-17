'use client'

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { zodResolver } from "@hookform/resolvers/zod";
import {toast} from 'react-hot-toast'

import { Modal } from "@/components/ui/modal"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModal = () => {
    const storeModal = useStoreModal();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            setLoading(true);

            const response = await axios.post('/api/stores', values)

            storeModal.onClose();
            toast.success('Store Created.')
            router.push(`/${response.data.id}`);
            
        }catch(error){
            toast.error('Something went wrong.')
        }
        finally{
            setLoading(false)
        }
    }

    return (

        <Modal
            title="Create Store"
            description="Add a new store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="E-commerce" {...field} />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />
                            <div className="pt-6 space-x-3 flex items-center justify-end w-full">
                                <Button disabled={loading} type="button" variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                                <Button disabled={loading} type="submit">Continue</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}