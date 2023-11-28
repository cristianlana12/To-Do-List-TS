import { Tarea } from "./tarea"

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index: number) => void
}

export const List = ({ listaTareas, borrarTarea }: ListaTareas) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
            )
            )}
        </div>
    )
}