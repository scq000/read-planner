<template>
    <div class="progress">
        <div class="container">
            <label class="progress-info">完成进度</label>
            <div class="progress-rate">{{ progress }}
                <span class="progress-rate__now" :style="{width: progress }"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      progress: '20%',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@height: 50px;

.progress {
    width: 100%;
    height: @height;
    margin: 1.3rem 0;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    background: #f6f0e2;
    position: relative;
}
.progress-info {
    float: left;
    line-height: @height;
}

.progress-rate {
    position: absolute;
    width: 70%;
    line-height: 30px;
    height: 60%;
    border: 1px solid red;
    left: 20%;
    top: 20%;
    vertical-align: middle;
}
.progress-rate__now {
        content: '';
        height: 100%;
        position: absolute;
        left: 0;
        background: #f05f30;
}

</style>
