import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import TeklifAlForm from "./TeklifAlForm"

export function TeklifAl() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="rounded-full bg-black text-white mt-8 px-8 py-4 font-bold transition-all hover:scale-110 delay-100">Teklif Alın</button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[600px] p-8 !rounded-none">
                <DialogHeader>
                    <DialogTitle className="text-3xl text-[#333333]">Teklif Alın</DialogTitle>
                </DialogHeader>
                <TeklifAlForm />
            </DialogContent>
        </Dialog>
    )
}
