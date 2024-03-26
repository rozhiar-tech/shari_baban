import React from "react";
// import { useState } from "react";
import "./style.css";
import image from "../../assets/Photo Gallery/CAM (20).jpg";
import logo from "../../assets/logo2.png";
export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="transparent-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-text">
          <h1 className="header-text">گروپی دايك </h1>
          گروپی دایک پێکهاتووە لە چەند کۆمپانیایەکی بواری جیا جیا، لە نێویاندا
          کۆمپانیای دایک کە یەکێکە لە کۆمپانیا نیشتمانییە گەورە و گرنگ و
          پێشکەوتووەکانی وەبەرهێنان و بەڵێندەرایەتی گشتی کە جێ دەستی دیارە لە
          خزمەت و ئاوەدانی وڵات و چەندین پرۆژەی گەورە و ستراتیجی جێبەجێکردووە
          وەک هەواری فەرمانبەرانی زانکۆ و شاری وەبەرهێنان. خۆشبەختانە ئەم پرۆژە
          گرنگەش کە (شاری بابان)ە ئەرکی جێبەجێکردنمان پێ سپێردراوە بە بڕیار و
          فەرمانی سەرۆکایەتی ئەنجومەنی وەزیران و ڕەزامەندی گشت لایەنە
          پەیوەندیدارەکان لە پرۆسەیەکی کارگێڕی و یاسایی دروست. ئەم پرۆژە گرنگە
          دەبێتە یەکێک لە گەورەترین و ناوازەترین پرۆژەکان لە هەرێمی کوردستان و
          عێراق پێشکەش بە شاری سلێمانی خۆشەویست دەکرێت.
          <br />
          <h1 className="header-text"> دیدگای ئێمە</h1>
          "لە شاری بابان، ئێمە پێشبینی کۆمەڵگەیەکی زیندوو و هاوسەنگ دەکەین کە
          لەنێو دیمەنە ئارامەکانی شاری سلێمانیدا گەشە بکات. دیدگامان دروستکردنی
          پڕۆژەیەکی نیشتەجێبوونی گرنگە کە پێوەرێکی نوێ لە کوالیتی و دیزاین و
          شێوازی ژیاندا دادەنێت. ئاواتەخوازین ژیانی مۆدێرن پێناسە بکەینەوە
          لەڕێگەی پێشکەشکردنی یەکەیەکی ناوازە بۆ دانیشتوانمان کە لەگەڵ ژینگە
          دۆستیدا یەکدەگرێتەوە ، هەستکردن بە سەربەخۆیی و خۆشگوزەرانی بۆ نەوەکانی
          داهاتوو بنیات دەنێین.
          <br />
          ئەرکی ئێمە داهاتوو بنیات دەنێین.
          <br />
          "ئەرکی ئێمە لە شاری بابان ئەوەیە کە بە وردی ئەزموونێکی ژیانی بێهاوتای
          دابڕێژین کە لە چاوەڕوانییەکانی دانیشتووانمان زیاتر بێت. ئێمە پابەندین
          بە گەیاندنی کوالیتی ناوازە و ستانداردی جیهانی لە هەموو لایەنەکانی
          پێشکەشکردنی نیشتەجێبوون و بازرگانیمان. لە ڕێگەی دیزاینێکی داهێنەرانە،
          پراکتیزەکردنی ژینگەدۆستی و خزمەتگوزاری سەرنجڕاکێش. ئامانجمان
          دروستکردنی یەکەیەکە کە دانیشتووان بتوانن تێیدا بژین، کار بکەن، و گەشە
          بکەن بە هەماهەنگییەکی تەواو لەگەڵ دەوروبەریان."
        </div>
        <div className="image-containerr">
          <img alt="ime" src={image} />
        </div>
      </section>
    </>
  );
}
