public with sharing class em_GuestInfoJsonParseCtrl {

    // 自定义 Apex 类用于传递 JSON 字符串
    // public class Request {
    //     @InvocableVariable(label='JSON String')
    //     public String jsonString;
    // }


    
    @InvocableMethod(label='GuestInfoJsonParse' category='Apex Action')
    public static List<GuestInfoObject> GuestInfoJsonParse(List<String> jsonString) {
        List<GuestInfoObject> guestInfoList =new List<GuestInfoObject>();
        
        // 遍历传入的请求列表，处理每个请求
        for (String req : jsonString) {
            // 解析 JSON 字符串
            GuestInfoObject guestInfoObject = (GuestInfoObject) JSON.deserialize(req, GuestInfoObject.class);

            guestInfoList.add(guestInfoObject);
        }
        
        return guestInfoList;
    }


    public class GuestInfoObject {
        @InvocableVariable(label='id')
        public Integer id;
        @InvocableVariable(label='name')
        public String name;
        @InvocableVariable(label='phone')
        public String phone;
    }
}