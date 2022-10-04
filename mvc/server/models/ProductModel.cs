namespace Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public float DiscountPercentage { get; set; }
        public float Rating { get; set; }
        public int Stock { get; set; }
        public string Brand { get; set; }
        public string Category { get; set; }
        public string Thumbnail { get; set; }
        public List<string> Images { get; set; }
    }
    class ConvertToQuery{
        public static string PriceToQuery(string price){
            if(price.Length<=0) return "";
            int idx = price.IndexOf('|');
            return $" BETWEEN {price.Substring(0,idx)} AND {price.Substring(idx+1)}";    
        }

        public static string BuildQuery(string brand, string category, string price){
            string _query="Where";
            if(brand.Length>0){
                _query += $" BRAND REGEXP \"{brand}\"";
                if(category.Length>0)
                    _query += $" and category REGEXP \"{category}\"";
                if(price.Length>0)
                    _query += $" and price {PriceToQuery(price)}";
            }
            else if(category.Length>0){
                _query += $" category REGEXP \"{category}\"";
                if(price.Length>0)
                    _query += $" and price {PriceToQuery(price)}";
            }
            else if(price.Length>0){
                _query += $" price {PriceToQuery(price)}";
            }
            else _query="";

            return _query;
        }
    }
}