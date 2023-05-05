'use client'
import { BlogCard } from "@/app/components/Blog/Blog";
import { Header } from "@/app/components/Header";
import { Button } from "@/app/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Filter } from "lucide-react";
import { SortAsc } from "lucide-react";
import { Settings } from "lucide-react";
import { Download } from "lucide-react";
import { ArrowDownIcon } from "lucide-react";

export default function Blog() {

    const HeaderBody = (
        <div className="flex justify-between px-7 flex-wrap gap-3">
            <div className="gap-3 flex flex-wrap">
                <Button className="bg-blue-600 h-9 rounded-xl px-5">
                    <span className="flex gap-3 items-center ">
                        <PlusIcon size={20} />
                        <span className="text-sm">New Post</span>
                    </span>
                </Button>
                <Button variant={"outline"} className="h-9 rounded-xl border-2 px-5 cursor-not-allowed">
                    <span className="flex gap-3 items-center ">
                        <Filter size={20} />
                        <span className="text-sm">Filters</span>
                    </span>
                </Button>
                <Button variant={"outline"} className="h-9 rounded-xl border-2 px-5 cursor-not-allowed">
                    <span className="flex gap-3 items-center ">
                        <SortAsc size={20} />
                        <span className="text-sm">Sort</span>
                    </span>
                </Button>
            </div>
            <div className="flex gap-3 flex-wrap">
                <Button variant={"outline"} className="h-9 rounded-xl border-2 px-5 cursor-not-allowed">
                    <span className="flex gap-3 items-center ">
                        <Settings size={20} />
                        <span className="text-sm">Settings</span>
                    </span>
                </Button>
                <Button variant={"outline"} className="h-9 rounded-xl border-2 px-5 cursor-not-allowed">
                    <span className="flex gap-3 items-center ">
                        <Download size={20} />
                        <span className="text-sm">Import/Export</span>
                        <ArrowDownIcon size={20} />
                    </span>
                </Button>
            </div>
        </div>
    )

    const data = {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis cumque consectetur fugit quo ipsum soluta, voluptatum maxime! Qui, quae est?",
        views: "2.3k",
        comments: "1.2k",
        likes: "1.2k",
        createdAt: "12/12/2021",
        reports: "132",
    }


    return (
        <div>
            <Header body={HeaderBody} />
            <section className="px-10 mt-3 flex gap-3 flex-wrap py-5">
                <BlogCard data={data} />
                <BlogCard data={data}/>
                <BlogCard data={data}/>
                <BlogCard data={data}/>
                <BlogCard data={data}/>
                <BlogCard data={data}/>
            </section>
        </div>
    )
}