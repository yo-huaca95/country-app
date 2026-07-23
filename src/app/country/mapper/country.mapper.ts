import { Country } from "../interfaces/country.interface";
import { RESTCountry, Object } from '../interfaces/rest-countries.interface';

export class CountryMapper{

    static mapRestCountryObjectToCountry(item:Object):Country{
        return {
            uuid:item.uuid,
            flag:item.flag.emoji,
            flagSvg:item.flag.url_svg,
            name:item.names.translations['spa'].official?? 'No Spanish Name',
            capital:item.capitals?.[0]?.name?? 'N/A',
            population:item.population,
            codesAlpha_3:item.codes.alpha_3
        }
    }

    static mapRestCoutriesObjectsArrayToCountriesArray(item:RESTCountry):Country[]{
        //console.log(item);
        return item.data.objects.map(CountryMapper.mapRestCountryObjectToCountry);
    }
}