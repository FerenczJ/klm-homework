
import { List, ListItem, ListItemText, IconButton, ListItemAvatar, Avatar, ListItemIcon, ListSubheader, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CircleIcon from '@mui/icons-material/Circle';
import { selectedAirportsState } from '../state/airportState';
import { useRecoilState } from 'recoil';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function AirportList(props) {

    const [selectedAirports, setSelectedAirports] = useRecoilState(selectedAirportsState);
    const removeAirportFromSelected = (airport) => setSelectedAirports(selectedAirports.filter(x => x.iata !== airport.iata));

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const getItemStyle = (isDragging, draggableStyle) => ({
        background: isDragging ? "lightGray" : "none",
        color: isDragging ? "white" : "black",
        ...draggableStyle
    });

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const reorderedAirports = reorder(
            selectedAirports,
            result.source.index,
            result.destination.index
        );

        setSelectedAirports(reorderedAirports);
    }

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "none",
    });


    return (
        <Box {...props}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <List
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {selectedAirports.map((airport, index) => (
                                <Draggable key={airport.iata} draggableId={airport.iata} index={index}>
                                    {(provided, snapshot) => (

                                        <ListItem
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete" onClick={() => removeAirportFromSelected(airport)}>
                                                    <DeleteIcon color="primary" />
                                                </IconButton>
                                            }>
                                            <ListItemIcon >
                                                {index == 0 && (<FlightTakeoffIcon color="primary" />)}
                                                {index == selectedAirports.length - 1 && selectedAirports.length !== 1 && (
                                                    <FlightLandIcon color="primary" />
                                                )}
                                                {index != 0 && index != selectedAirports.length - 1 && (<CircleIcon sx={{ marginLeft: "3px" }} fontSize="2" color="primary" />)}
                                            </ListItemIcon>
                                            <ListItemText primary={airport.name} />

                                        </ListItem>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </List>

                    )}
                </Droppable>
            </DragDropContext>
            {selectedAirports.length < 1 && (<ListItem><ListItemText primary="No filghts seleced." /></ListItem>)}
        </Box>
    )
}