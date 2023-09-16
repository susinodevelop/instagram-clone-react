import React from "react";
import { CarrouselItemModel } from "../../models/carrousel-item-model";

export interface CarrouselProps {
    elements: CarrouselItemModel[]
}

export const Carrousel = ({ elements }: CarrouselProps) => {
    return (
        <div>
            {elements.map(element => (
                <div key={element.id} className="carrousel-element">
                    {element.item}
                </div>
            ))}
        </div>
    )
}