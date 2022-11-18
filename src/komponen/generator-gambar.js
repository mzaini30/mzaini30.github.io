export default function (judul) {
  let judulnya = encodeURIComponent(judul);
  return `https://res.cloudinary.com/delba/image/upload/w_600,h_400,q_100/l_text:Karla_50_bold:${judulnya},co_rgb:ffe4e6,c_fit,w_400,h_240/fl_layer_apply,g_south_west,x_50,y_90/l_text:Karla_22:mzaini30.js.org,co_rgb:ffe4e680,c_fit,w_400/fl_layer_apply,g_south_west,x_50,y_50/l_twitter_name:zenia2020/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_70,g_north_west,x_50,y_50/grain-gradient.png`;
}
