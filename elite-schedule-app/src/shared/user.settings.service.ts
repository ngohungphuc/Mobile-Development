import {Injectable }from '@angular/core'; 
import {Storage }from '@ionic/storage'; 
import * as _ from "lodash"; 
@Injectable()
export class UserSettings {
    
    constructor(private storage:Storage) {}

    ngOnInit() {}

    favoriteTeam(team, tournamentId, tournamentName) {
        let item =  {team:team, tournamentId:tournamentId, tournamentName:tournamentName}
        this.storage.set(team.id, JSON.stringify(item))
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id)
    }

    isFavoriteTeam(teamId) {
        return this.storage.get(teamId).then(value => value?true:false)
    }

    getAllFavorite() {
        let items = []
        this.storage.forEach( (value, key, index) => {
             items.push(JSON.parse(value))
        })
        return items
    }
}