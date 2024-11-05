import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"
import { GraduationCap } from "lucide-react"
const WallOfFame = (() => {
    const winners = [
        {
            name: {
                1: { name: "Akash Vardhan V", year: "II", department: "AIML", section: "A" },
                2: { name: "Karthiga Rajesh", year: "III", department: "CSE", section: "B" }
            },
            event: "AI Accuracy"
        },
        {
            name: {
                1: { name: "Harish Kanna A", year: "III", department: "IT", section: "A" },
                2: { name: "Kabil RS", year: "II", department: "IT", section: "B" }
            },
            event: "React Remix"
        },
        {
            name: {
                1: { name: "Pratheba D", year: "II", department: "CSE" },
                2: { name: "Gokula Krishnan K", year: "III", department: "CSE" },
                3: { name: "Fardeen Jamal Jafer", year: "II", department: "CSE" }
            },
            event: "Poster Making"
        }
    ];

    return (
        <div className="px-7 py-5 ">
            <div className=" font-slussen text-white lg:text-6xl md:text-5xl text-4xl"> Wall Of Fame </div>
            <div className=" font-slussenLight lg:text-xl md:text-xl mt-6 text-sm text-white">Celebrating the outstanding achievements of Techtober winners. These individuals have demonstrated exceptional skills and innovation in their respective fields.</div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
                {winners.map((winner, index) => (
                    <Card key={index} className="bg-[#171717] border-gray-700 overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                        <CardHeader className="bg-black border-b p-6">
                            <CardTitle className="flex items-center justify-between text-2xl font-bold text-primary text-white">
                                <span className="truncate">{winner.event}</span>
                                <Trophy className="h-8 w-8 text-primary stroke-yellow-300  fill-yellow-300" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            {Object.entries(winner.name).map(([place, details]) => (
                                <div key={place} className="mb-4 last:mb-0">
                                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                                        <Badge variant="secondary" className="mr-2">
                                            {getOrdinal(parseInt(place))} Place
                                            <span>

                                            </span>
                                        </Badge>
                                        <span className="truncate text-white">{details.name}</span>
                                    </h3>
                                    <p className="text-gray-400">
                                        Year: {details.year} | Dept: {details.department}
                                        {details.section && ` | Section: ${details.section}`}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div> */}
        </div>
    )
})

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default WallOfFame