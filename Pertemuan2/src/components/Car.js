import { Text, View, SafeAreaView, ScrollView } from 'react-native'; //rcc
import React, { Component } from 'react';

export class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            merk:"Toyota",
            types:{type:"Matik", model:"Calya ADS"},
        };
    }

    Come2Go(Value){
        return (
            <View>
                <Text>Lets go running away from duty</Text>
                <Text>with us only {Value} IDR</Text>
            </View>
        )
    }

    render() {
        return(
            <ScrollView>
                <View>
                    <View>
                        <Text>Hi im a car</Text>
                        <Text>Merk : {this.state.merk}</Text>
                    </View>
                    <View>    
                        <Text>Type : {this.state.types.type}</Text>
                        <Text>Model: {this.state.types.model}</Text>
                </View>
                
                    {this.Come2Go(20000)}

                    <Text>Lorem ipsum dolor sit amet. Qui quis impedit vel 
                            aperiam quidem et necessitatibus facere ea quia eaque 
                            vel illo quod sed quos laudantium a enim voluptas. Aut 
                            omnis illo et voluptatibus voluptas eos fugit repellendus? 
                            Est galisum unde aut eaque voluptatem qui incidunt voluptatem 
                            in labore quia est eveniet fugiat aut commodi consequuntur. 
                            Et itaque eaque id libero excepturi hic illum quia? 
                            Ut maxime nemo aut dicta blanditiis et architecto omnis 
                            sit iusto nobis! Aut dolorem maiores sed provident itaque
                             non eaque alias At atque illo ab rerum tempore et libero 
                             ipsam sed dolores quis. Sit tenetur voluptas qui sequi 
                             blanditiis est nisi nulla et nesciunt perferendis. 
                             Vel eaque saepe et illo eaque id amet rerum ad rerum dolores
                              et corrupti voluptatibus. Id obcaecati iste non quia fugit
                               et harum harum ut illum unde. 
                        </Text>
                        <Text>Lorem ipsum dolor sit amet. Qui quis impedit vel 
                            aperiam quidem et necessitatibus facere ea quia eaque 
                            vel illo quod sed quos laudantium a enim voluptas. Aut 
                            omnis illo et voluptatibus voluptas eos fugit repellendus? 
                            Est galisum unde aut eaque voluptatem qui incidunt voluptatem 
                            in labore quia est eveniet fugiat aut commodi consequuntur. 
                            Et itaque eaque id libero excepturi hic illum quia? 
                            Ut maxime nemo aut dicta blanditiis et architecto omnis 
                            sit iusto nobis! Aut dolorem maiores sed provident itaque
                             non eaque alias At atque illo ab rerum tempore et libero 
                             ipsam sed dolores quis. Sit tenetur voluptas qui sequi 
                             blanditiis est nisi nulla et nesciunt perferendis. 
                             Vel eaque saepe et illo eaque id amet rerum ad rerum dolores
                              et corrupti voluptatibus. Id obcaecati iste non quia fugit
                               et harum harum ut illum unde. 
                        </Text>
                        <Text>Lorem ipsum dolor sit amet. Qui quis impedit vel 
                            aperiam quidem et necessitatibus facere ea quia eaque 
                            vel illo quod sed quos laudantium a enim voluptas. Aut 
                            omnis illo et voluptatibus voluptas eos fugit repellendus? 
                            Est galisum unde aut eaque voluptatem qui incidunt voluptatem 
                            in labore quia est eveniet fugiat aut commodi consequuntur. 
                            Et itaque eaque id libero excepturi hic illum quia? 
                            Ut maxime nemo aut dicta blanditiis et architecto omnis 
                            sit iusto nobis! Aut dolorem maiores sed provident itaque
                             non eaque alias At atque illo ab rerum tempore et libero 
                             ipsam sed dolores quis. Sit tenetur voluptas qui sequi 
                             blanditiis est nisi nulla et nesciunt perferendis. 
                             Vel eaque saepe et illo eaque id amet rerum ad rerum dolores
                              et corrupti voluptatibus. Id obcaecati iste non quia fugit
                               et harum harum ut illum unde. 
                        </Text>
                </View>
            </ScrollView>
        );
    }
}

export default Car;

